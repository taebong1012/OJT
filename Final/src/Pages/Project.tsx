import { useParams } from "react-router-dom";

const Project = () => {
  const { projectnum } = useParams<{ projectnum: string }>();
  console.log(projectnum);

  return (
    <iframe
      className="w-screen h-screen"
      src={`../../public/pj${projectnum}/index.html`}
    ></iframe>
  );
};

export default Project;
