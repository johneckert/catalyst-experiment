import BarWGrid from "../components/BarWGrid.vue";
import BubbleChart from "../components/BubbleChart.vue";
import BubbleGrid from "../components/BubbleGrid.vue";

export const routes = [
  {
    path: "",
    component: BarWGrid,
    name: "barWGrid"
  },
  {
    path: "/bubblechart",
    component: BubbleChart,
    name: "bubbleChart"
  },
  {
    path: "/bubbleGrid",
    component: BubbleGrid,
    name: "bubbleGrid"
  },
  {
    path: "*",
    redirect: "/"
  }
];
