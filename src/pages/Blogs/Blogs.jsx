import { Helmet } from "react-helmet-async";


const Blogs = () => {
    return (
        <div>
            <Helmet>
        <title>Applicruit | Blogs</title>
      </Helmet>
            <h1 className="text-center my-4">Access token and Refresh token</h1>
            <div className="border max-w-3xl text-center mx-auto">
            <p>An access token is a string representing an authorization issued to the client. Tokens represent specific scopes and duration of access, granted by the resource owner, and enforced by the resource server and authorization server.</p>
            <p>The responsibility of refresh token is to request for a new access token when the existing access token is expired.</p>
            <p>We should store it in a cookie in client side, it can be safer than local browser storage.</p>
            </div>
            <h1 className="text-center my-4">Express JS</h1>
            <div className="border max-w-3xl text-center mx-auto">
            <p>An access token is a string representing an authorization issued to the client. Tokens represent specific scopes and duration of access, granted by the resource owner, and enforced by the resource server and authorization server.</p>
            <p>The responsibility of refresh token is to request for a new access token when the existing access token is expired.</p>
            </div>
            <h1 className="text-center my-4">Next JS</h1>
            <div className="border max-w-3xl text-center mx-auto">

            <p>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
            </div>

            <h1 className="text-center my-4">My Code</h1>
            <div className="border max-w-3xl text-center mx-auto mb-8">

            <p>I have created a react router dom single page app. builds necessary components.</p>
            <ul>
                <li>Client Side- React</li>
                <li>Server Sider- Express JS</li>
                <li>Database- Mongodb</li>
                <li>Framework- tailwind, Daisy UI</li>
            </ul>
            </div>
            
        </div>
    );
};

export default Blogs;