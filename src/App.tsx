import { useTodos1Query } from "./app/features/threeApi/api1";
import { useTodos2Query } from "./app/features/threeApi/api2";
import { useTodos3Query } from "./app/features/threeApi/api3";
import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [combinedTodos, setCombinedTodos] = useState<
    { id: number; title: string }[]
  >([]);
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(true); // New state

  const {
    data: todos1Data,
    isSuccess: isSuccess1,
    isLoading: isLoading1,
  } = useTodos1Query();
  const {
    data: todos2Data,
    isSuccess: isSuccess2,
    isLoading: isLoading2,
  } = useTodos2Query();
  const {
    data: todos3Data,
    isSuccess: isSuccess3,
    isLoading: isLoading3,
  } = useTodos3Query();

  useEffect(() => {
    if (isSuccess1) {
      setCombinedTodos((prevTodos) => [...prevTodos, ...todos1Data]);
    }
  }, [isSuccess1, todos1Data]);

  useEffect(() => {
    if (isSuccess2) {
      setCombinedTodos((prevTodos) => [...prevTodos, ...todos2Data]);
    }
  }, [isSuccess2, todos2Data]);

  useEffect(() => {
    if (isSuccess3) {
      setCombinedTodos((prevTodos) => [...prevTodos, ...todos3Data]);
    }
  }, [isSuccess3, todos3Data]);

  useEffect(() => {
    const totalQueries = 3;
    const completedQueries =
      (isSuccess1 ? 1 : 0) + (isSuccess2 ? 1 : 0) + (isSuccess3 ? 1 : 0);
    const currentProgress = (completedQueries / totalQueries) * 100;
    setProgress(currentProgress);
    //hide progress bart after 1sec
    if (currentProgress === 100) {
      setTimeout(() => {
        setShowProgressBar(false);
      }, 1000);
    }
  }, [isSuccess1, isSuccess2, isSuccess3]);

  const sortedTodos = combinedTodos.slice().sort((a, b) => a.id - b.id);

  return (
    <div>
      {showProgressBar && (
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: "red" }}
        ></div>
      )}
      <div>API Call Progress: {progress.toFixed(2)}%</div>
      {sortedTodos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
