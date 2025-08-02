import { Tip } from "./tip/tip";

export const Wrapper = () => {
  return (
    <>
      Usually in serious <Tip tipText="Role playing games">RPGs</Tip> you have
      many different <Tip tipText="magic or physical">abilities</Tip> with
      different{" "}
      <Tip tipText="like electicity or bleed or fire">status effects</Tip>
    </>
  );
};
