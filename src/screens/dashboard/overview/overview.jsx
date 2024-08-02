// @ts-nocheck
import CustomAreaChart from "../../../components/charts/area_chart";
import OverviewCard from "./card";

const data = [
  { name: "1", Service1: 400 },
  { name: "2", Service1: 500 },
  { name: "3", Service1: 550 },
  { name: "4", Service1: 500 },
  { name: "5", Service1: 400 },
  { name: "6", Service1: 300 },
  { name: "7", Service1: 250 },
  { name: "8", Service1: 300 },
  { name: "9", Service1: 400 },
  { name: "10", Service1: 500 },
  { name: "11", Service1: 550 },
  { name: "12", Service1: 500 },
  { name: "13", Service1: 400 },
  { name: "14", Service1: 300 },
  { name: "15", Service1: 250 },
  { name: "16", Service1: 300 },
  { name: "17", Service1: 400 },
  { name: "18", Service1: 500 },
  { name: "19", Service1: 550 },
  { name: "20", Service1: 500 },
  { name: "21", Service1: 400 },
  { name: "22", Service1: 300 },
  { name: "23", Service1: 250 },
  { name: "24", Service1: 300 },
  { name: "25", Service1: 400 },
  { name: "26", Service1: 500 },
  { name: "27", Service1: 550 },
  { name: "28", Service1: 500 },
  { name: "29", Service1: 400 },
  { name: "30", Service1: 300 },
];

export default function Overview() {
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-around">
        <div className="col-12 col-lg-5 mt-md-3 card bg-dark">
          <div className="card-header fs-4 text-white text-start ps-5">
            Sales
          </div>
          <div className="card-body h-100">
            <div className="chart-container" style={{ height: "14rem" }}>
              <CustomAreaChart
                data={data}
                className="overflow-x-hidden"
                keys={[
                  { label: "Service1", fill: "#F94144", activeFill: "pink" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5 mt-md-3 card bg-dark">
          <div className="card-header fs-4 text-white text-start ps-5">
            Sales
          </div>
          <div className="card-body h-100">
            <div className="chart-container" style={{ height: "14rem" }}>
              <CustomAreaChart
                data={data}
                className="overflow-x-hidden"
                keys={[
                  { label: "Service1", fill: "#F94144", activeFill: "pink" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 pt-4 d-flex flex-column flex-lg-row justify-content-between ">
        <OverviewCard
          bgColor="#AB7102"
          className="col-4"
          value="10,000"
          label="Deals Count"
        />
        <OverviewCard
          bgColor="#00691E"
          className="col-4"
          value="10,000"
          label="Deals Value"
        />
        <OverviewCard
          bgColor="#026CAB"
          className="col-4"
          value="10,000"
          label="Conversion rate"
        />
      </div>
    </div>
  );
}
