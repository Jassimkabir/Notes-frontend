import moment from 'moment';
import React from 'react';
import axios from '../../api/axios';
import './style.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

const NoteCard = observer(
  ({ item, setDeleteNote, setExpandCard, setNoteId, setNoteDetails }) => {
    const nowDate = moment(new Date());
    const itemDate = moment(item.date);
    const duration = moment.duration(nowDate.diff(itemDate));
    const days = Math.round(duration.asDays());
    const hours = Math.round(duration.asHours());
    const minutes = Math.round(duration.asMinutes());

    // const [errorModal, setErrorModal] = useState(true);

    const { authStore } = useStore();
    const { status } = authStore;

    const onDelete = () => {
      setDeleteNote(true);
      setNoteId(item.id);
    };
    const onExpand = async () => {
      await axios.get(`/notes/get-note/${item.id}`).then((response) => {
        if (response.status === 200) {
          setNoteDetails(response.data);
          setExpandCard(true);
        }
      });
      // .catch((err) => {
      //   if (err.response.status === 400) {
      //     setErrorModal(true);
      //   }
      // });
    };
    return (
      <>
        <div className='cardContainer'>
          <div className='cardContents'>
            <div className='cardHead'>
              <h5>{item?.title}</h5>
            </div>
            <div className='cardBody'>
              <span>{item?.description}</span>
            </div>
            <div className='cardFooter d-flex justify-content-between align-items-center'>
              <span className='date'>
                {(days > 5 && moment(item.date).format('MMMM Do, YYYY')) ||
                  (minutes < 1 && 'Just now') ||
                  (minutes < 60 &&
                    `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`) ||
                  (hours < 24 &&
                    `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`) ||
                  (hours >= 24 && `${days} ${days > 1 ? 'days' : 'day'} ago`)}
              </span>
              <div className='actionsDiv d-flex'>
                <button onClick={() => onDelete()} className='actionButton'>
                  <i className='fa-solid fa-trash'></i>
                </button>
                {status && (
                  <button onClick={() => onExpand()} className='actionButton'>
                    <i class='fa-solid fa-expand'></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* {!status && errorModal && (
          <div className='modalContainer  d-flex justify-content-center'>
            <div className='modalCard'>
              <div className='text-center'>
                <h5 className='p-3'>
                  <i className='fa-solid fa-circle-exclamation me-2'></i>You
                  have limited access to this website
                </h5>
              </div>
              <div className='divFoot d-flex justify-content-end p-1'>
                <button
                  onClick={() => setErrorModal(false)}
                  className='btn btn-primary'
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )} */}
      </>
    );
  }
);

export default NoteCard;
