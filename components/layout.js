const Layout = ({children}) => {
    return (
        <div className="layout-container">
            <main>   
                {children}           
            </main>
        </div>
    )
}

export default Layout;