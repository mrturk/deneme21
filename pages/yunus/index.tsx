import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { Tab1 } from "../../public/assets/svgs/icons/Tab1";
import { Tab2 } from "../../public/assets/svgs/icons/Tab2";
import { Tab3 } from "../../public/assets/svgs/icons/Tab3";
import yunus from "../../public/assets/img/yunus.jpg";
import { useState } from "react";
import Link from "next/link";
import { Phone } from "../../public/assets/svgs/icons/phone";
import { MailIco } from "../../public/assets/svgs/icons/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Yunus = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  return (
    <Stack>
      <Stack flexDirection="column">
        <Stack
          gap="30px"
          flexDirection="column"
          height="250px"
          justifyContent="center"
        >
          <Stack justifyContent="centre" alignItems="center">
            <Avatar
              sx={{ width: "103px", height: "106px" }}
              alt="Remy Sharp"
              src={yunus.src}
            />
          </Stack>
          <Stack justifyContent="centre" alignItems="center">
            <Typography fontSize="20px" color="white">
              Yunus Emre Çıracı
            </Typography>
            <Typography color="white">co-founder</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        justifyContent="space-around"
        alignItems="center"
        height="100px"
        flexDirection="row"
        sx={{
          background:
            "linear-gradient(180deg, #373439 0%, rgba(75, 73, 77, 0.56) 100%)",
        }}
      >
        <Stack>
          <IconButton
            onClick={() => {
              setTabValue(0);
            }}
            sx={{ paddingTop: "10px" }}
          >
            <Tab1 sx={{ fontSize: "40px", color: "red" }} />
          </IconButton>
        </Stack>
        <Stack>
          <IconButton
            onClick={() => {
              setTabValue(1);
            }}
          >
            <Tab2 sx={{ fontSize: "30px" }} />
          </IconButton>
        </Stack>
        <Stack>
          <IconButton
            onClick={() => {
              setTabValue(2);
            }}
            sx={{ paddingTop: "17px" }}
          >
            <Tab3 sx={{ fontSize: "40px" }} />
          </IconButton>
        </Stack>
      </Stack>
      <Stack paddingX="20px" paddingY="50px">
        {tabValue == 0 && (
          <Stack gap="20px">
            <Stack>
              <Button
                color="success"
                onClick={() => {
                  window.location.href =
                    "https://mmcardsystem.online/userfiles/yunusemre.vcf";
                }}
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                Kaydet
              </Button>
            </Stack>
            <Link href="tel:+905452177179">
              <Stack
                width="100%"
                height="37px"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                paddingX="20px"
                sx={{
                  background: "#59545C",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <Stack>
                  <Typography sx={{ color: "white" }}>
                    +90 545 217 71 79
                  </Typography>
                </Stack>
                <Stack>
                  <Phone />
                </Stack>
              </Stack>
            </Link>
            <Link href="mailto:kormenko@hotmail.com">
              <Stack
                width="100%"
                height="37px"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                paddingX="20px"
                sx={{
                  background: "#59545C",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <Stack>
                  <Typography sx={{ color: "white" }}>
                    kormenko@hotmail.com
                  </Typography>
                </Stack>
                <Stack>
                  <MailIco />
                </Stack>
              </Stack>
            </Link>
          </Stack>
        )}
        {tabValue == 1 && (
          <Stack flexDirection="row" flexWrap="wrap" gap="20px">
            <Link target="_blank" href="https://www.instagram.com/_koray_gunay">
              <Stack
                width="150px"
                paddingTop="10px"
                height="150px"
                alignItems="center"
                paddingX="20px"
                sx={{
                  background: "#59545C",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <Stack color="white">
                  <InstagramIcon sx={{ fontSize: "100px" }} />
                </Stack>
                <Stack>
                  <Typography sx={{ color: "white" }}>İnstagram</Typography>
                </Stack>
              </Stack>
            </Link>
          </Stack>
        )}
        {tabValue == 2 && (
          <Stack gap="20px">
            <Stack>
              <Typography color="white">Şirket Adı</Typography>
              <Stack
                onClick={() => {
                  navigator.clipboard.writeText("Referans Yazılım");
                  alert("kopyalandı");
                }}
              >
                <Stack
                  width="100%"
                  height="37px"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingX="20px"
                  sx={{
                    background: "#59545C",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <Stack>
                    <Typography sx={{ color: "white" }}>
                      Referans Yazılım
                    </Typography>
                  </Stack>
                  <Stack>
                    <Phone />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Typography color="white">E-Posta</Typography>
              <Link href="mailto:yunus1481emre@gmail.com">
                <Stack
                  width="100%"
                  height="37px"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingX="20px"
                  sx={{
                    background: "#59545C",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <Stack>
                    <Typography sx={{ color: "white" }}>
                      yunus1481emre@gmail
                    </Typography>
                  </Stack>
                  <Stack>
                    <MailIco />
                  </Stack>
                </Stack>
              </Link>
            </Stack>
            <Stack>
              <Typography color="white">Adres</Typography>
              <Link href="https://goo.gl/maps/HJ6dikEqtrgs5sMK9">
                <Stack
                  width="100%"
                  height="37px"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingX="20px"
                  paddingY="50px"
                  sx={{
                    background: "#59545C",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <Stack>
                    <Typography sx={{ color: "white" }}>
                      Karamanlı mahallesi stadyum caddesi Yapı tek iş merkezi
                      numara 13 kat 2 daire 2
                    </Typography>
                  </Stack>
                  <Stack color="white">
                    <LocationOnIcon />
                  </Stack>
                </Stack>
              </Link>
            </Stack>
            <Stack>
              <Typography color="white">İban</Typography>
              <Stack
                onClick={() => {
                  navigator.clipboard.writeText(
                    "TR85 0006 2000 7410 0006 6646 24"
                  );
                  alert("kopyalandı");
                }}
              >
                <Stack
                  width="100%"
                  height="37px"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingX="20px"
                  sx={{
                    background: "#59545C",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <Stack>
                    <Typography sx={{ color: "white" }}>
                      TR85 0006 2000 7410 0006 6646 24
                    </Typography>
                  </Stack>
                  <Stack color="white">
                    <ContentCopyIcon />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Yunus;
