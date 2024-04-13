export default function Hero({ children }) {
    return (
        <div className="bg-hero bg-repeat md:bg-center bg-200x200 h-screen">
            {/* <a href="https://www.vecteezy.com/free-vector/wall">Wall Vectors by Vecteezy</a> */}
            {children}
        </div>
    );
}
