import React from "react"

export enum LoadStatus {
    PENDING,
    SUCCESS,
    FAILED,
}

export type AssetLoaderProps = {
    assets: Array<{
        href: string,
        as:string,
        required?: boolean,
    }>;
    children: (status: LoadStatus) => React.ReactNode,
}

export const AssetLoader = (props: AssetLoaderProps) => {
    const [state, setState] = React.useState<Record<string, boolean | undefined> | null>(null);
    const [links, setLinks] = React.useState<JSX.Element[]>([]);
    React.useEffect(() => {
        const links: JSX.Element[] = [];
        const assets = props.assets.reduce((prev, curr) => { prev[curr.href] = undefined; return prev; }, {} as Record<string, boolean | undefined>);
        setState(assets);
        props.assets.forEach((asset, i) => {
            links.push(<link 
                rel="preload"
                key={i}
                href={asset.href} 
                as={asset.as} 
                onLoad={() => setState((prevState) => ({
                    ...prevState,
                    [asset.href]: true,
                 }))}
                onError={() => setState((prevState) => ({
                    ...prevState,
                    [asset.href]: true,
                 }))}
            />)
        });
        setLinks(links);
    }, []);

    if(!state) {
        return <>
            {props.children(LoadStatus.PENDING)}
        </>
    }

    const stateValues = Object.values(state);
    const pending = stateValues.some(v => v === undefined);
    const success = stateValues.some(v => v !== false);

    let loadState: LoadStatus = LoadStatus.PENDING;

    if (!success) {
        loadState = LoadStatus.FAILED;
    } else if (!pending) {
        loadState = LoadStatus.SUCCESS;
    }

    return <> 
        {links}
        {props.children(loadState)}
    </>
  
}