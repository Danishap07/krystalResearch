import Navbar from './navbar'
import Footer from './footer'
import CustomCursor from './customCursor'
import SmoothScroll from './smoothScroll'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <CustomCursor/>
      <SmoothScroll >
      <main>{children}</main>
      </SmoothScroll>
      <Footer />
    </>
  )
}