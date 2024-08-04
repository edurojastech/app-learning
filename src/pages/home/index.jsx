import { Stack } from "@mui/material";

export default function HomePage() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} height={"100vh"}>
      <Stack border={"2px solid red"} width={{ xs: '100%', md: '15%'}} display={{ xs: "none", sm: "block"}} p={4}>AREA MENU - NAVEGACAO</Stack>
      <Stack border={"2px solid orange"} width={{ xs: '100%', md: '85%'}}>
        <Stack border={"2px solid tomato"} width={'100%'} height={"15%"} p={4}>AREA HEADER-IconProfile</Stack>
        <Stack border={"2px solid green"} width={'100%'} height={"85%"} p={4}>AREA CONTEUDO</Stack>
      </Stack>
    </Stack>
  )
}