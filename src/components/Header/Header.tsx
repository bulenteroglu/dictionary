import getWord from "@/network/getWord";
import { Words } from "@/types/word";
import { useForm } from "react-hook-form";
import Icon from "../Icon/Icon";
import clsx from "clsx";

type Inputs = {
  word: string;
};

interface Props {
  setData(data: Words): void;
}

export default function Header({ setData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit({ word }: Inputs) {
    const data: Words = await getWord(word);

    if (data) setData(data);
  }

  return (
    <div className="flex flex-col">
      <div className="mt-16 flex items-center justify-between">
        <Icon type="Logo" />
        <div className="flex items-center space-x-5">
          <div>dropdown</div>
          <div>theme</div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg mt-14">
        <div
          className={clsx(
            "flex h-full w-full rounded-xl bg-gray-100 py-5 px-6",
            errors.word && "border-2 border-red-500"
          )}
        >
          <input
            className="w-full bg-transparent text-black placeholder-black focus:outline-none"
            placeholder="Search any word here..."
            {...register("word", { required: true })}
          />
        </div>
      </form>
      {errors.word && (
        <div className="text-red-500">Whoops, can’t be empty…</div>
      )}
    </div>
  );
}
