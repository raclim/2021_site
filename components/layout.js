import List from './list';
import Content from './content';

const Layout = ({children}) => {
    return (
        <div className="layout-container">
            <main>              
                {children}

                <List></List>
                <Content></Content>
            </main>
        </div>
    )
}

export default Layout;