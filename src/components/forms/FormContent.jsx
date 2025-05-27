import { Form, useForm } from "react-hook-form";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useEffect } from "react";
//import { addTrack, editTrack } from "../../scripts/backend/backend";
import FormInput from "../inputs/FormInput";
import MultiInput from "../inputs/MultiInput";
import { DEFAULT_IMAGE_URL } from "../../constants/settings";

function FormContent({ trackData, refreshList, refreshAudio }) {
  const notifyAddTrack = () =>
    toast("Track have been added!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const notifyEditTrack = () =>
    toast("Track have been changed!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      artist: "",
      album: "",
      genres: [],
      coverImage: "",
    },
  });

  useEffect(() => {
    if (trackData) {
      reset({
        title: trackData.title,
        artist: trackData.artist,
        album: trackData.album,
        genres: trackData.genres?.map((g) =>
          typeof g === "string" ? { label: g, value: g } : g,
        ),
        coverImage:
          trackData.coverImage === ""
            ? DEFAULT_IMAGE_URL
            : trackData.coverImage,
      });
    } else {
      reset({
        title: "",
        artist: "",
        album: "",
        genres: [],
        coverImage: DEFAULT_IMAGE_URL,
      });
    }
  }, [trackData, reset]);

  const onSubmit = async (data) => {
    const formatted = {
      ...data,
      genres: data.genres.map((elem) => elem.value),
      coverImage: data.coverImage === "" ? DEFAULT_IMAGE_URL : data.coverImage,
    };
    console.log(formatted);

    if (!trackData) {
      await addTrack(formatted);
      notifyAddTrack();
    }
    {
      await editTrack(trackData.id, formatted);
      notifyEditTrack();
    }
    await refreshList();
    await refreshAudio();
  };

  return (
    <>
      <Form control={control} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          data-testid="input-title"
          field="title"
          errors={errors}
          placeholder=""
          {...register("title", { required: true })}
        >
          Title
        </FormInput>
        <FormInput
          data-testid="input-artist"
          field="artist"
          placeholder=" "
          errors={errors}
          {...register("artist", { required: true })}
        >
          Artist
        </FormInput>
        <FormInput
          data-testid="input-album"
          field="album"
          placeholder=" "
          errors={errors}
          {...register("album")}
        >
          Album
        </FormInput>
        <MultiInput
          field="genres"
          control={control}
          errors={errors}
          data-testid="genre-selector"
        >
          Genres
        </MultiInput>
        <FormInput
          data-testid="input-cover-image"
          type="url"
          field="coverImage"
          placeholder="https://"
          errors={errors}
          {...register("coverImage")}
        >
          Add image
        </FormInput>
        <button
          data-testid="submit-button"
          type="submit"
          className="me-2 mt-6 mb-2 cursor-pointer rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
        <ToastContainer data-testid="toast-success" />
      </Form>
    </>
  );
}

export default FormContent;
