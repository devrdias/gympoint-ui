import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdEdit, MdDelete } from 'react-icons/md';
import AlertModal from '../../components/AlertModal';
import CustomModal from '../../components/CustomModal';
import NewStudentForm from '~/components/NewStudentForm';

import {
  fetchStudentsRequest,
  deleteStudentRequest,
} from '~/store/modules/student/student.actions';
import { getStudentsById } from '../../store/modules/student/student.selectors';

import { Container, ResponsiveTable, StudentTable } from './styles';

export default function Students() {
  const dispatch = useDispatch();
  const students = getStudentsById(useSelector(state => state.student));
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState();
  const [showDeleteStudentModal, setShowDeleteStudentModal] = useState(false);
  const [showNewStudentModal, setShowNewStudentModal] = useState(true);

  useEffect(() => {
    dispatch(fetchStudentsRequest());
  }, [dispatch]);

  function handleOnClick() {
    setShowNewStudentModal(true);
  }

  function handleOnChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchStudentsRequest(search));
  }

  function handleOpenModal(id) {
    setShowDeleteStudentModal(true);
    setDeleteId(id);
  }

  function handleEdit(id) {}

  function handleDelete(id) {
    dispatch(deleteStudentRequest(id));
    setDeleteId(null);
    setShowDeleteStudentModal(false);
  }

  return (
    <Container>
      <header>
        <h1>Students List</h1>
        <div>
          <button type="button" onClick={handleOnClick}>
            NEW
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              placeholder="Search student"
              onChange={handleOnChange}
            />
          </form>
        </div>
      </header>

      <ResponsiveTable>
        <StudentTable>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={String(student.id)}>
                <td>{student.name}</td>
                <td>email 1</td>
                <td> 20</td>
                <td className="center-content">
                  <button
                    type="button"
                    id="edit"
                    onClick={() => handleEdit(student.id)}
                  >
                    <MdEdit size={19} color="#4d85ee" />
                  </button>
                  <button
                    type="button"
                    id="delete"
                    onClick={() => handleOpenModal(student.id)}
                  >
                    <MdDelete size={19} color="#de3b3b" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </StudentTable>
      </ResponsiveTable>

      <AlertModal
        title="Delete student"
        message="Are you sure you want to delete ?"
        handleCallback={() => handleDelete(deleteId)}
        handleCloseModal={() => setShowDeleteStudentModal(false)}
        showModal={showDeleteStudentModal}
      />

      <CustomModal
        size="lg"
        title="Create new student"
        showFooter={false}
        handleCloseModal={() => setShowNewStudentModal(false)}
        showModal={showNewStudentModal}
      >
        <NewStudentForm
          handleCloseModal={() => setShowNewStudentModal(false)}
        />
      </CustomModal>
    </Container>
  );
}
