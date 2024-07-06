import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

export const useCourses = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState();

  const getCourses = async () => {
    setIsLoading(true);
    try {
      const data = (await axios.get(`${API_URL}/courses`)).data;
      setCourses(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return {
    courses,
    isLoading,
    error
  }
};
