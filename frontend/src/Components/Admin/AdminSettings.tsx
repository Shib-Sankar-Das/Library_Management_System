import React from "react";
import { z } from "zod";
import { clientSignUpSchema } from "../../Validator/ClientSignup";
import BottomToastOption from "../../Options/BottomToastOption";
import { toast } from "react-toastify";
import { AdminLoginReponse } from "../../Validator/AdminLoginValidator";
interface SettingProps {
  data: z.infer<typeof AdminLoginReponse>;
}
const AdminSettings: React.FC<SettingProps> = ({ data }: SettingProps) => {
  const [Data, SetData] = React.useState<z.infer<typeof clientSignUpSchema>>({
    Email: data.Email,
    Name: data.Name,
    Password: ""
  });
  const [Update, SetUpdate] = React.useState<FormData>(new FormData())
  const [Avatar, SetAvatar] = React.useState<File>();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin", {
        method: "PUT",
        body: Update,
      })
        .then((res) => {
          if (res.status == 200) {
            toast.success(JSON.stringify(res.statusText), BottomToastOption);
            window.setTimeout(() => {
              location.reload();
            }, 1000);
          }
          else
            toast.error(JSON.stringify(res.statusText), BottomToastOption);
          return res.json();
        });
      console.log(response);
    } catch (e) {
      toast.error((e as { message: string }).message.substring(0, 47) + "...",BottomToastOption);
    }
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const Image: HTMLImageElement = document.querySelector<HTMLImageElement>("img#avatar-update")!;
    SetAvatar((prevAvatar) => {
      try {
        if (
          e.target.files &&
          (e.target.files as FileList)[0].size <= 40 * 1024
        ) {
          Image.src = URL.createObjectURL(e.target.files![0]);
          SetUpdate(prevUpdate => {
            prevUpdate.set("Avatar", e.target.files![0]);
            return prevUpdate;
          });
          return e.target.files[0];
        } else {
          toast.error("image must be under 40KB retaining previous image", BottomToastOption);
          return prevAvatar;
        }
      } catch (e) {
        Image.src = "./invalid.svg";
        toast.error("please select a file", BottomToastOption);
        SetUpdate(prevUpdate => {
          prevUpdate.delete("Avatar");
          return prevUpdate;
        });
        return undefined;
      }
    });
  };

  return (
    <form className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-4 overflow-auto max-h-screen" onSubmit={handleSubmit}>
      <div className="w-[60%] md:w-1/2 lg:w-1/3 p-4">
        <label htmlFor="userAvatar">
          <img
            src={data.Image}
            alt="Placeholder"
            style={{ transform: "scale(0.75)" }}
            className="w-full rounded-xl shadow-lg"
            id="avatar-update"
          />
        </label>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4  rounded-md shadow-lg mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">{"Update Profile"}</h2>
        <div>
          <div className="mb-4">
            <input
              type="file"
              id="userAvatar"
              className="hidden"
              onChange={handleAvatarChange}
            />
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="username"
              type="text"
              value={Data.Name}
              placeholder="Username"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                SetData((prev) => {
                  SetUpdate(prevUpdate => {
                    prevUpdate.set("Name", e.target?.value || "");
                    return prevUpdate;
                  });
                  return { ...prev, Name: e.target?.value || "" };
                });
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="email"
              type="email"
              value={Data.Email}
              placeholder="Email"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                SetData((prev) => {
                  SetUpdate(prevUpdate => {
                    prevUpdate.set("Email", e.target?.value || "");
                    return prevUpdate;
                  });
                  return { ...prev, Email: e.target?.value || "" };
                });
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="joining-date"
            >
              Joining date
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="joining-date"
              type="date"
              defaultValue={
                (new Intl.DateTimeFormat('en-CA')).format(new Date(data.JoiningDate))
              }
              disabled={true}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="password"
              type="password"
              value={Data.Password}
              placeholder="********"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                SetData((prev) => {
                  SetUpdate(prevUpdate => {
                    prevUpdate.set("Password", e.target?.value || "");
                    return prevUpdate;
                  });
                  return { ...prev, Password: e.target?.value || "" };
                });
              }}
              onDoubleClick={(
                e: React.MouseEvent<HTMLInputElement, MouseEvent>
              ) => {
                e.currentTarget.type =
                  e.currentTarget.type == "password" ? "text" : "password";
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              children={"SAVE"}
            />
          </div>
        </div>
      </div>

    </form>
  );
};
export default AdminSettings;