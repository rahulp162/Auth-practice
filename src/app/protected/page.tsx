import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { NextPage } from "next"
import Image from "next/image";
const Protected: NextPage = withPageAuthRequired(
    async () => {
        const session = await getSession();
        const user: any = session?.user;
        return (
          <div className="content-layout px-44">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
    },{
        returnTo: '/protected'
    }
)

export default Protected