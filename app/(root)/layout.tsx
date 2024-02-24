import { Navbar } from "./_components/navbar";

const Layout = ({children} : {children: React.ReactNode;}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}
export default Layout