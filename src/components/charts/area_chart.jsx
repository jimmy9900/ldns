import {
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Legend,
  Line,
} from "recharts";

export default function CustomAreaChart({ data, keys, className }) {
  return (
    <ResponsiveContainer className={className}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="30 3" />
        <XAxis
          dataKey="name"
          type="number"
          fontSize={18}
          domain={[1, 30]}
          ticks={[1, 5, 10, 15, 20, 25, 30]}
          allowDataOverflow
        />
        <YAxis fontSize={18} />
        <Tooltip />
        {keys.map((key, index) => (
          <Area
            type="monotone"
            barSize={10}
            key={index}
            fill={key.fill}
            dataKey={key.label}
            className="bar m-2"
            activeBar={<Rectangle fill={key.activeFill} />}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
