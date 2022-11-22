import { useEffect, useState } from "react";
import "./exam.csv";
import { usePapaParse } from "react-papaparse";
import { KitchenSinkStory } from "./tables";
export const tClasses = [
  {
    ADA: 27,
    ADALab: 12,
    Java: 29,
    Javalab: 12,
    CommSys: 29,
    CommSysLab: 8,
    IM: 19,
    SoftEngg: 30,
    SoftEnggLab: 16,
    CSP: 15,
    CSPLab: 14,
    Total: 203,
    Totalpercage: 100,
    Theoryattendance: 149,
    Theorypercage: 100,
  },
];

export default function ReadRemoteFile() {
  let a;
  const { readRemoteFile } = usePapaParse();
  const [dataz, setDataz] = useState({ data: 0 });
  const [loading, setLoading] = useState(true);
  const readFunc = () => {
    readRemoteFile("./exam.csv", {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setDataz(results);
        setLoading(false);
      },
    });
  };
  useEffect(() => {
    loading ? readFunc() : (a = 1);
  }, []);

  return (
    <div>
      <KitchenSinkStory Data={Object.entries(dataz.data)} />
    </div>
  );
}
