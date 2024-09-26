import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedDegree = watch("degree", "");
  const getLabel = ()=>{
    switch (selectedDegree) {
      case "Duolingo":
        return{
          field:{
            speaking:"Production",
            reading:"Literacy",
            writing:"Conversation",
            listening:"Comprehension"
          }
        }
        

    
      default:
        return{
          field:{
            speaking:"Speaking Score",
            reading:"Reading Score",
            writing:"Writing Score",
            listening:"Listening Score"
          }
        }
    }
  }

  const getValidationRules = (field) => {
    switch (selectedDegree) {
      case "IELTS":
        return {
          required: `${field} is required`,
          min: {
            value: 0,
            message: `${field} must be at least 0`,
          },
          max: {
            value: 9,
            message: `${field} must be at most 9`,
          },
        };
      case "TOEFL":
        return {
          required: `${field} is required`,
          min: {
            value: 0,
            message: `${field} must be at least 0`,
          },
          max: {
            value: 120,
            message: `${field} must be at most 120`,
          },
        };
      case "Duolingo":
        return {
          required: `${field} is required`,
          min: {
            value: 10,
            message: `${field} must be at least 10`,
          },
          max: {
            value: 160,
            message: `${field} must be at most 160`,
          },
        };
      case "PTE":
        return {
          required: `${field} is required`,
          min: {
            value: 10,
            message: `${field} must be at least 10`,
          },
          max: {
            value: 90,
            message: `${field} must be at most 90`,
          },
        };
      default:
        return { required: `${field} is required` };
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary w-full min-h-screen flex justify-center items-center">
        <div className="w-[60%] bg-white rounded-md p-10">
          <div></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <select
                defaultValue=""
                name="degree"
                className="w-full border p-4 outline-none"
                {...register("degree", { required: "Choose a Degree" })}
              >
                <option value="" disabled hidden>
                  Choose your degree
                </option>
                <option value="IELTS">IELTS</option>
                <option value="toefl">TOEFL</option>
                <option value="Duolingo">Duolingo</option>
                <option value="PTE">PTE</option>
              </select>
              {errors.degree && (
                <span className="red flex mt-2 ml-3 text-red-600">
                  {errors.degree.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-10 mt-5 ">
              <div className="relative h-10 col-span-2 ">
                <input
                  type="text"
                  name="overall"
                  id="overall"
                  className="absolute w-full h-full border pl-5 focus:outline focus:outline-lime-500 peer"
                  {...register("overall", getValidationRules("Overall Score"))}
                />

                <label
                  htmlFor="overall"
                  className="absolute px-2 pr-4 top-2.5 left-2 cursor-text select-none peer-valid:-translate-y-5 peer-focus:scale-90 peer-focus:text-lime-500 bg-white text-sm transition-transform"
                >
                  Overall Score
                </label>
                <div className="absolute top-8 p-2">
                  {errors.overall && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.overall.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative h-10  ">
                <input
                  type="text"
                  name="reading"
                  id="reading"
                  className="absolute w-full h-full border pl-5 focus:outline focus:outline-lime-500 peer"
                  {...register("reading",getValidationRules("readding Score"))}
                />
                <label
                  htmlFor="reading"
                  className="absolute px-2 pr-4 top-2.5 left-2 cursor-text select-none transform peer-valid:-translate-y-5 peer-focus:scale-90 peer-focus:text-lime-500 bg-white text-sm transition-transform"
                >
                  {getLabel().field.reading}
                </label>
                <div className="absolute top-8 p-2">
                  {errors.reading && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.reading.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative h-10  ">
                <input
                  type="text"
                  name="listening"
                  id="listening"
                  className="absolute w-full h-full border pl-5 focus:outline focus:outline-lime-500 peer"
                  {...register("listening",getValidationRules("Listening Score"))}
                />
                <label
                  htmlFor="listening"
                  className="absolute px-2 pr-4 top-2.5 left-2 cursor-text select-none peer-valid:-translate-y-5 peer-focus:scale-90 peer-focus:text-lime-500 bg-white text-sm transition-transform"
                >
                  {getLabel().field.listening}
                </label>
                <div className="absolute top-8 p-2">
                  {errors.listening && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.listening.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative h-10">
                <input
                  type="text"
                  name="speaking"
                  id="speaking"
                  className="absolute w-full h-full border pl-5 focus:outline focus:outline-lime-500 peer"
                  {...register("speaking",getValidationRules("Speaking Score"))}

                />
                <label
                  htmlFor="speaking"
                  className="absolute px-2 pr-4 top-2.5 left-2 cursor-text select-none peer-valid:-translate-y-5 peer-focus:scale-90 peer-focus:text-lime-500 bg-white text-sm transition-transform"
                >
                  {getLabel().field.speaking}
                </label>
                <div className="absolute top-8 p-2">
                  {errors.speaking && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.speaking.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative h-10  ">
                <input
                  type="text"
                  name="writing"
                  id="writing"
                  className="absolute w-full h-full border pl-5 focus:outline focus:outline-lime-500 peer"
                  {...register("writing",getValidationRules("writing Score"))}

                />
                <label
                  htmlFor="writing"
                  className="absolute px-2 pr-4 top-2.5 left-2 cursor-text select-none peer-valid:-translate-y-5 peer-focus:scale-90 peer-focus:text-lime-500 bg-white text-sm transition-transform"
                >
                  {getLabel().field.writing}
                </label>
                <div className="absolute top-8 p-2">
                  {errors.writing && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.writing.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <input
                type="submit"
                className="bg-lime-400 p-3 w-full rounded-md cursor-pointer hover:bg-lime-600 transition-colors"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
