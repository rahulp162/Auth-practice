import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center w-full mt-10 px-44">
      <div className="flex items-center w-full justify-between">
        <div>
            <h1 className="text-2xl mb-4">User Info</h1>
            {
                user?
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>Name: {user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>:
                "No user Logged in"
            }
        </div>
      </div>
    </div>
  );
};

export default Profile;