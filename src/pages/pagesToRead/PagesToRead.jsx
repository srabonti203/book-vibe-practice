import { useContext } from "react";
import BookContext from "../../context/BookContext";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF4560",
  "#775DD0",
  "#3F51B5",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height}
          ${x + width / 2},${y + height / 3}
          ${x + width / 2},${y}
          C${x + width / 2},${y + height / 3}
          ${x + (2 * width) / 3},${y + height}
          ${x + width},${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index, isActive } = props;

  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      fill={color}
      stroke={color}
      strokeWidth={isActive ? 5 : 0}
      style={{
        transition: "stroke-width 0.3s ease",
      }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const PagesToRead = () => {
  const { storeBook } = useContext(BookContext);

  const chartData = storeBook.map((book) => ({
    name: book.bookName,
    uv: book.totalPages,
  }));

  return (
    <div className="w-full h[500px] mt-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 30,
            right: 20,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <Tooltip cursor={{ fillOpacity: 0.3 }} />

          <XAxis dataKey="name" angle={-20} textAnchor="end" interval={0} />

          <YAxis />

          <Bar dataKey="uv" shape={<TriangleBar />} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
