import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ChangeTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      colorScheme='ghost'
      onClick={() => {
        toggleColorMode();
      }}
    >
      {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </Button>
  );
}
