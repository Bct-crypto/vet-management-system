import { Typography } from "@/components/Material";

const Footer = () => {
  return (
    <footer className="py-2 w-full text-blue-gray-600">
      <Typography
        variant="small"
        className="font-normal text-inherit text-center flex items-center justify-center"
      >
        &copy;{" "}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
