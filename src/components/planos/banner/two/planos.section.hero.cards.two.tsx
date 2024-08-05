/* eslint-disable */
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { PiFacebookLogoFill } from "react-icons/pi";
import { logoAzul } from "@/constants/logo/constants.logo";

export const CardPlanosTwo = () => {
  return (
    <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="mt-8 flex justify-center items-center pb-2">
        <img
          src={logoAzul}
          alt="NR Conexões	que fortalecem a sua conexão com o mundo."
          className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
        />
        <CardTitle className="text-center">NR Conexões</CardTitle>
        <CardDescription className="font-normal text-primary dark:">
          Provedor de internet
        </CardDescription>
      </CardHeader>

      <CardContent className="text-center pb-2">
        <p>
          A NR Conexões é uma empresa de internet que atua em diversos estados e
          filiais.
        </p>
      </CardContent>

      <CardFooter>
        <div>
          <a
            href="https://www.facebook.com/nr.conexoes"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Facebook icon</span>
            <PiFacebookLogoFill className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/nrconexoesquefortalecem?igsh=bW9vODlpNW5zcDA3"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Instagram icon</span>
            <InstagramLogoIcon className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/company/nrconexoes/mycompany/"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Linkedin icon</span>
            <Linkedin size="20" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};
