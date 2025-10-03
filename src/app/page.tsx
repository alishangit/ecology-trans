import Container from "./components/containers/Container";
import MainBtn from "./components/buttons/MainBtn";
import Input from "./components/input/Input";
import HistoryBlock from "./components/statistic/history/HistoryBlock/HistoryBlock";
import TabContainer from "./components/tabBar/TabContainer/TabContainer";
import EarningsBlock from "./components/statistic/earning/EarningsBlock/EarningsBlock";

export default function Home() {
  return (
    <>
      <Container>
        <main>
          <MainBtn />
          <Input />
          <EarningsBlock />
          <HistoryBlock />
        </main>
      </Container>
      <TabContainer />
    </>
  );
}
