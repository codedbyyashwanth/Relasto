import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const About = lazy(() => import("./pages/Home/About"));

const Agents = lazy(() => import("./pages/Agents/Agents"));
const Agent = lazy(() => import("./pages/Agents/Agent"));

const Blog = lazy(() => import("./pages/Article/Blog"));
const Blogs = lazy(() => import("./pages/Article/Blogs"));

const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));

const Contact = lazy(() => import("./pages/Others/Contact"));
const FAQ = lazy(() => import("./pages/Others/FAQ"));
const Licence = lazy(() => import("./pages/Others/Licence"));
const Policy = lazy(() => import("./pages/Others/Policy"));
const NotFound = lazy(() => import("./pages/Others/NotFound"));

const Listings = lazy(() => import("./pages/Properties/Listings"));
const PropertyDesc = lazy(() => import("./pages/Properties/PropertyDesc"));


const App:FC = () => {

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="agents" element={<Agents />} />
            <Route path="agent" element={<Agent />} />

            <Route path="blog" element={<Blog />} />
            <Route path="blogs" element={<Blogs />} />

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="licence" element={<Licence />} />
            <Route path="policy" element={<Policy />} />

            <Route path="properties" element={<Listings />}>
                <Route path="details" element={<PropertyDesc />} />
            </Route>


            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;