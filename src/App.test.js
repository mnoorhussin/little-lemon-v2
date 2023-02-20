import { renderHook } from "@testing-library/react-hooks";
import BookingForm from "./components/BookingForm";

test("initializeTimes returns correct initial state", () => {
  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM"];
  const { result } = renderHook(() => useReducer(BookingForm.reducer, { times: [] }));

  result.current[1]({ type: "initialize", payload: { availableTimes } });

  expect(result.current[0]).toEqual({ times: availableTimes });
});

test("updateTimes returns same value as state", () => {
  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM"];
  const { result } = renderHook(() => useReducer(BookingForm.reducer, { times: availableTimes }));

  result.current[1]({ type: "updateTimes", payload: { date: "2022-02-14" } });

  expect(result.current[0]).toEqual({ times: availableTimes });
});
