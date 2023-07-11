import Footer from "../components/Footer"
import Nav from "../components/Nav"

function NotFound() {
    return(
        <div className="h-[100vh] flex flex-col">
            <Nav className="flex-1"/>
            <main className=" flex-1 bg-no-repeat bg-center bg-contain bg-[url('assets/images/404.svg')]">

            </main>
            <Footer className="flex-1"/>
        </div>
    )
}
export default NotFound
