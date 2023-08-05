import { GET_EXAMS } from "../constants/actions-types";
import axios from "axios";

export const getExams = (id) => (dispatch) => {
  axios
    .get(`/teacher/getExamsDate/${id}`)
    .then((response) => dispatch({ type: GET_EXAMS, payload: response.data }))
    .catch((err) => console.log(err));
};
export const addExam = (payload) => (dispatch) => {
  axios
    .post("/teacher/addExamDate", payload.newExam)
    .then(() => dispatch(getExams(payload.id)))
    .catch((err) => console.log(err));
};

export const editExam = (payload) => (dispatch) => {
  axios
    .put(`/teacher/editExam/${payload.selectId}`, {
      from: payload.newEdit,
    })
    .then((res) => {
      dispatch(getExams(payload.id));
    })
    .catch((err) => console.log(err));
};

export const deleteExam = (payload) => (dispatch) => {
  axios
    .delete(`/teacher/deleteExam/${payload.selectId}`)
    .then((res) => {
      dispatch(getExams(payload.id));
    })
    .catch((err) => {
      console.log(err);
    });
};
