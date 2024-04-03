import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Fallback from "./pages/others/Fallback";

const About = lazy(() => import("./pages/home/About"));

const Agents = lazy(() => import("./pages/agents/Agents"));
const Agent = lazy(() => import("./pages/agents/Agent"));

const Blog = lazy(() => import("./pages/article/Blog"));
const Blogs = lazy(() => import("./pages/article/Blogs"));

const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));

const Contact = lazy(() => import("./pages/others/Contact"));
const FAQ = lazy(() => import("./pages/others/FAQ"));
const Licence = lazy(() => import("./pages/others/Licence"));
const Policy = lazy(() => import("./pages/others/Policy"));
const NotFound = lazy(() => import("./pages/others/NotFound"));

const Listings = lazy(() => import("./pages/properties/Listings"));
const PropertyDesc = lazy(() => import("./pages/properties/PropertyDesc"));


const App:FC = () => {

    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="agents" element={<Agents />}>
                    <Route path="agent" element={<Agent />} />
                </Route>

                <Route path="blogs" element={<Blogs />}>
                    <Route path="blog" element={<Blog />} />
                </Route>

                <Route path="properties" element={<Listings />}>
                    <Route path="details" element={<PropertyDesc />} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="licence" element={<Licence />} />
                <Route path="policy" element={<Policy />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default App;