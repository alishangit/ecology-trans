import Container from "./components/containers/Container";
import MainBtn from "./components/buttons/MainBtn";
import Input from "./components/input/Input";
import HistoryBlock from "./components/statistic/history/HistoryBlock/HistoryBlock";
import TabContainer from "./components/tabBar/TabContainer/TabContainer";

import EarningsBlock from "./components/earning/EarningsBlock/EarningsBlock";
import EarningBy from "./components/earning/EarningBy/EarningBy";
import classes from "./page.module.css";


export default function Home() {
  return (
    <>
      <Container>
        <main>
          <MainBtn />
          <Input />
          <div className={classes.earningByItems}>
            <EarningBy title="За сегодня" price={0} />
            <EarningBy title="За месяц" price={0} />
          </div>
          <EarningsBlock />
          <HistoryBlock />
          <Modal/>
        </main>
      </Container>
      <TabContainer />
    </>
  );
}
