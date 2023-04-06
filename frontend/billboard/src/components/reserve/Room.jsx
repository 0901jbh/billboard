// // import React, { useEffect, useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { useNavigate, useRouteLoaderData } from "react-router";
// // import { deleteRoom, getRoomInfo } from "../../store/reserve";
// // import RoomEntry from "./roomcomponent/RoomEntry";
// // import RoomReply from "./roomcomponent/RoomReply";
// // import { CloseCircleOutlined } from "@ant-design/icons";
// // import { Button, Modal } from "antd";
// // import ReserveForm from "./ReserveForm";
// // import RoomLocation from "./roomcomponent/RoomLocation";

// // const Room = () => {
// //   // Todo: userId값 받아오기
// //   const userId = "string";
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const roomId = useRouteLoaderData("room");
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [roomData, setRoomData] = useState();
// //   const reload = () => {
// //     dispatch(getRoomInfo(roomId)).then((res) => {
// //       setRoomData(res.payload.room);
// //     });
// //   };
// //   useEffect(() => {
// //     reload();
// //   }, []);
// //   useEffect(() => {
// //     reload();
// //   }, [modalOpen]);
// //   return (
// //     <div>
// //       {roomData && (
// //         <>
// //           <hr />
// //           <div>
// //             방ID:{roomData.roomInfo.roomId}
// //             방장:{roomData.roomInfo.hostId}
// //             장소:{roomData.roomInfo.location}
// //             인원:{roomData.roomInfo.personCount}
// //             제한인원:{roomData.roomInfo.personLimit}
// //             방이름:{roomData.roomInfo.title}
// //             lat:{roomData.roomInfo.lat}
// //             lng:{roomData.roomInfo.lng}
// //           </div>
// //           <hr />
// //           <RoomReply
// //             replies={roomData.replies}
// //             roomId={roomId}
// //             reload={reload}
// //           />
// //           <RoomEntry
// //             entries={roomData.entries}
// //             roomId={roomId}
// //             reload={reload}
// //           />
// //           <RoomLocation
// //             lat={roomData.roomInfo.lat}
// //             lng={roomData.roomInfo.lng}
// //           />

// //           {/* height:window.innerHeight*0.3, width:window.innerWidth*0.3 */}

// //           <hr />
// //           {roomData.roomInfo.hostId === userId && (
// //             <>
// //               <Button
// //                 onClick={() => {
// //                   // Todo: 500오류 해결해야함
// //                   dispatch(deleteRoom(roomId)).then((res) => {
// //                     console.log(res);
// //                     navigate("/reserve/find", { replace: true });
// //                   });
// //                 }}
// //               >
// //                 방삭제
// //               </Button>
// //             </>
// //           )}
// //           <hr />
// //           {roomData.roomInfo.hostId === userId && (
// //             <>
// //               <Button
// //                 onClick={() => {
// //                   setModalOpen(true);
// //                 }}
// //               >
// //                 방정보수정
// //               </Button>
// //               <Modal
// //                 footer={null}
// //                 bodyStyle={{ height: window.innerHeight * 0.8 }}
// //                 open={modalOpen}
// //                 title="Basic Modal"
// //                 width={window.innerWidth * 0.8}
// //                 onCancel={() => {
// //                   setModalOpen(false);
// //                 }}
// //               >
// //                 <ReserveForm
// //                   data={roomData.roomInfo}
// //                   roomId={roomId}
// //                   setModalOpen={setModalOpen}
// //                 />
// //               </Modal>
// //             </>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Room;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useRouteLoaderData } from "react-router";
// import { deleteRoom, getRoomInfo } from "../../store/reserve";
// import { deleteReply, getReply, makeReply } from "../../store/reserve";
// import RoomEntry from "./roomcomponent/RoomEntry";
// import RoomReply from "./roomcomponent/RoomReply";
// import { CloseCircleOutlined } from "@ant-design/icons";
// import { Button, Modal } from "antd";
// import ReserveForm from "./ReserveForm";
// import RoomLocation from "./roomcomponent/RoomLocation";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { fontWeight } from "@mui/system";
// import { selectUser } from "../../store/user";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const Room = () => {
//   // Todo: userId값 받아오기
//   let dateStrLocalized;
//   const userId = useSelector(selectUser).loginUser.userId;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const roomId = useRouteLoaderData("room");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [roomData, setRoomData] = useState();
//   const [date, setDate] = useState();
//   const reload = () => {
//     dispatch(getRoomInfo(roomId)).then((res) => {
//       setRoomData(res.payload.room);
//     });
//   };
//   useEffect(() => {
//     reload();
//   }, []);
//   useEffect(() => {
//     reload();
//   }, [modalOpen]);
//   useEffect(() => {
//     if (roomData) {
//       const date = new Date(roomData.roomInfo.date);
//       // const kstDate = new Date(date.getTime() + (9 * 60 * 60 * 1000));
//       const options = {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         hour12: false,
//         timeZone: "UTC",
//         weekday: "long",
//       };
//       setDate(date.toLocaleString(undefined, options));
//     }
//   }, [roomData]);
//   // const date = new Date(roomData.roomInfo.date).getMonth() + 1;

//   // // 날짜 출력
//   // const year = date.getFullYear();
//   // const month = date.getMonth() + 1;
//   // const day = date.getDate();
//   // console.log(`${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`);

//   // // 시간 출력
//   // const hour = date.getHours();
//   // const minute = date.getMinutes();
//   // const second = date.getSeconds();
//   // console.log(`${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`);

//   return (
//     <>
//       {roomData && (
//         <Box sx={{ flexGrow: 1 }} width="80vw" backgroundColor="#d9d9d9">
//           <Grid
//             container
//             spacing={4}
//             marginTop="8.7vh"
//             padding="0.5rem 2rem 1rem 2rem"
//           >
//             <Grid item xs={7} height="60vh">
//               <RoomLocation
//                 lat={roomData.roomInfo.lat}
//                 lng={roomData.roomInfo.lng}
//               />
//               <Grid>
//                 <Item
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-evenly",
//                     height: "18vh",
//                   }}
//                 >
//                   <span
//                     style={{
//                       fontSize: "2rem",
//                       fontWeight: "bolder",
//                       textAlign: "start",
//                       marginLeft: "1.5rem",
//                     }}
//                   >
//                     참가자
//                   </span>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "space-evenly",
//                     }}
//                   >
//                     <RoomEntry
//                       entries={roomData.entries}
//                       roomId={roomId}
//                       reload={reload}
//                       hostId={roomData.roomInfo.hostId}
//                     />
//                   </div>
//                 </Item>
//               </Grid>
//             </Grid>
//             <Grid item xs={5}>
//               <Item
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   height: "60vh",
//                   overflowY: "scroll",
//                   padding: "2rem 2rem 2rem 2rem",
//                 }}
//               >
//                 <span style={{ fontSize: "2rem", fontWeight: "bolder" }}>
//                   {date}
//                 </span>
//                 <span style={{ fontSize: "3rem", fontWeight: "bolder" }}>
//                   {roomData.roomInfo.title}
//                 </span>
//                 <span style={{ fontSize: "1.5rem" }}>
//                   {roomData.roomInfo.location}
//                 </span>

//                 {roomData.replies.map((reply, idx) => {
//                   return (
//                     <div
//                       key={idx}
//                       style={{
//                         paddingTop: "1rem",
//                       }}
//                     >
//                       <div style={{ fontSize: "2rem", textAlign: "start" }}>
//                         {reply.userId}
//                       </div>
//                       <div
//                         style={{
//                           fontSize: "2rem",
//                           textAlign: "start",
//                           wordBreak: "keep-all",
//                         }}
//                       >
//                         {reply.content}
//                       </div>
//                       {reply.userId === userId && (
//                         <>
//                           <CloseCircleOutlined
//                             style={{
//                               fontSize: "1.5rem",
//                               color: "red",
//                             }}
//                             onClick={() => {
//                               dispatch(deleteReply(reply.replyId)).then(
//                                 (res) => {
//                                   reload();
//                                 }
//                               );
//                             }}
//                           />
//                         </>
//                       )}
//                       <hr style={{ width: "27.5vw" }} />
//                     </div>
//                   );
//                 })}
//               </Item>
//               <Grid style={{ marginTop: "2.8vh" }}>
//                 <RoomReply
//                   replies={roomData.replies}
//                   roomId={roomId}
//                   reload={reload}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       )}
//     </>
//   );
// };
// export default Room;

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useRouteLoaderData } from "react-router";
// import { deleteRoom, getRoomInfo } from "../../store/reserve";
// import RoomEntry from "./roomcomponent/RoomEntry";
// import RoomReply from "./roomcomponent/RoomReply";
// import { CloseCircleOutlined } from "@ant-design/icons";
// import { Button, Modal } from "antd";
// import ReserveForm from "./ReserveForm";
// import RoomLocation from "./roomcomponent/RoomLocation";

// const Room = () => {
//   // Todo: userId값 받아오기
//   const userId = "string";
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const roomId = useRouteLoaderData("room");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [roomData, setRoomData] = useState();
//   const reload = () => {
//     dispatch(getRoomInfo(roomId)).then((res) => {
//       setRoomData(res.payload.room);
//     });
//   };
//   useEffect(() => {
//     reload();
//   }, []);
//   useEffect(() => {
//     reload();
//   }, [modalOpen]);
//   return (
//     <div>
//       {roomData && (
//         <>
//           <hr />
//           <div>
//             방ID:{roomData.roomInfo.roomId}
//             방장:{roomData.roomInfo.hostId}
//             장소:{roomData.roomInfo.location}
//             인원:{roomData.roomInfo.personCount}
//             제한인원:{roomData.roomInfo.personLimit}
//             방이름:{roomData.roomInfo.title}
//             lat:{roomData.roomInfo.lat}
//             lng:{roomData.roomInfo.lng}
//           </div>
//           <hr />
//           <RoomReply
//             replies={roomData.replies}
//             roomId={roomId}
//             reload={reload}
//           />
//           <RoomEntry
//             entries={roomData.entries}
//             roomId={roomId}
//             reload={reload}
//           />
//           <RoomLocation
//             lat={roomData.roomInfo.lat}
//             lng={roomData.roomInfo.lng}
//           />

//           {/* height:window.innerHeight*0.3, width:window.innerWidth*0.3 */}

//           <hr />
//           {roomData.roomInfo.hostId === userId && (
//             <>
//               <Button
//                 onClick={() => {
//                   // Todo: 500오류 해결해야함
//                   dispatch(deleteRoom(roomId)).then((res) => {
//                     console.log(res);
//                     navigate("/reserve/find", { replace: true });
//                   });
//                 }}
//               >
//                 방삭제
//               </Button>
//             </>
//           )}
//           <hr />
//           {roomData.roomInfo.hostId === userId && (
//             <>
//               <Button
//                 onClick={() => {
//                   setModalOpen(true);
//                 }}
//               >
//                 방정보수정
//               </Button>
//               <Modal
//                 footer={null}
//                 bodyStyle={{ height: window.innerHeight * 0.8 }}
//                 open={modalOpen}
//                 title="Basic Modal"
//                 width={window.innerWidth * 0.8}
//                 onCancel={() => {
//                   setModalOpen(false);
//                 }}
//               >
//                 <ReserveForm
//                   data={roomData.roomInfo}
//                   roomId={roomId}
//                   setModalOpen={setModalOpen}
//                 />
//               </Modal>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Room;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useRouteLoaderData } from "react-router";
import { deleteRoom, getRoomInfo } from "../../store/reserve";
import { deleteReply, getReply, makeReply } from "../../store/reserve";
import RoomEntry from "./roomcomponent/RoomEntry";
import RoomReply from "./roomcomponent/RoomReply";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row } from "antd";
import ReserveForm from "./ReserveForm";
import RoomLocation from "./roomcomponent/RoomLocation";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { fontWeight } from "@mui/system";
import { selectUser } from "../../store/user";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  '방 정보 수정',
  '방 삭제',

];
const ITEM_HEIGHT = 48;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Room = () => {
  // Todo: userId값 받아오기
  let dateStrLocalized;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userId = useSelector(selectUser).loginUser.userId;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomId = useRouteLoaderData("room");
  const [modalOpen, setModalOpen] = useState(false);
  const [roomData, setRoomData] = useState();
  const [date, setDate] = useState();
  const reload = () => {
    dispatch(getRoomInfo(roomId)).then((res) => {
      setRoomData(res.payload.room);
      console.log(res.payload.room)
    });
  };
  useEffect(() => {
    reload();
  }, []);
  useEffect(() => {
    reload();
  }, [modalOpen]);
  useEffect(() => {
    if (roomData) {
      const date = new Date(roomData.roomInfo.date);
      // const kstDate = new Date(date.getTime() + (9 * 60 * 60 * 1000));
      const options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "UTC",
        weekday: "long",
      };
      setDate(date.toLocaleString(undefined, options));
    }
  }, [roomData]);
  // const date = new Date(roomData.roomInfo.date).getMonth() + 1;

  // // 날짜 출력
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // console.log(`${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`);

  // // 시간 출력
  // const hour = date.getHours();
  // const minute = date.getMinutes();
  // const second = date.getSeconds();
  // console.log(`${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`);

  return (
    <>
      {roomData && (
        <Box sx={{ flexGrow: 1 }} width="80vw" backgroundColor="#d9d9d9">
          <Grid
            container
            spacing={4}
            marginTop="8.7vh"
            padding="0.5rem 2rem 1rem 2rem"
          >
            <Grid item xs={7} height="60vh">
              <RoomLocation
                lat={roomData.roomInfo.lat}
                lng={roomData.roomInfo.lng}
              />
              <Grid>
                <Item
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    height: "18vh",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bolder",
                      textAlign: "start",
                      marginLeft: "1.5rem",
                    }}
                  >
                    참가자
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <RoomEntry
                      entries={roomData.entries}
                      roomId={roomId}
                      reload={reload}
                      hostId={roomData.roomInfo.hostId}
                    />
                  </div>
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Item
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  height: "60vh",
                  overflowY: "scroll",
                  padding: "2rem 2rem 2rem 2rem",
                }}
              >
                <Row>
                  {/* <Col span={20}> */}
                  <span style={{ fontSize: "1.5rem", fontWeight: "bolder", textAlign: "start" }}>
                    {date}
                  </span>
                  {/* </Col> */}
                  {/* <Col span={4}> */}
                  {roomData.roomInfo.hostId === userId &&
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? 'long-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>}
                  {/* </Col> */}
                </Row>

                <span style={{ fontSize: "3rem", fontWeight: "bolder" }}>
                  {roomData.roomInfo.title}
                </span>
                <span style={{ fontSize: "1.5rem" }}>
                  {roomData.roomInfo.location}
                </span>

                {roomData.replies.map((reply, idx) => {
                  return (<Row>
                    <div key={idx + reply}>
                      <div
                        style={{
                          paddingTop: "1rem",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flexStart",
                          textAlign: "start"
                        }}
                      >

                        <Col span={6}>
                          <Chip
                            avatar={<Avatar alt="avatar" src={`https://avatars.dicebear.com/api/identicon/${reply.userId}.svg`} />}
                            label={reply.userId}
                            // 이부분바꾸기
                            variant="outlined"
                            key={reply + idx}
                          /></Col>
                        <Col span={17}>
                          <span
                            style={{
                              fontSize: "1rem",
                              textAlign: "start",
                              wordBreak: "keep-all",
                            }}
                          >
                            {reply.content}
                          </span></Col>
                        <Col span={1}>
                          {reply.userId === userId && (
                            <>
                              <CloseCircleOutlined
                                style={{
                                  fontSize: "1.5rem",
                                  color: "red",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                onClick={() => {
                                  dispatch(deleteReply(reply.replyId)).then(
                                    (res) => {
                                      reload();
                                    }
                                  );
                                }}
                              />
                            </>
                          )}</Col>
                      </div>
                      <hr style={{ width: "27.5vw" }} />
                    </div></Row>
                  );
                })}
              </Item>
              <Grid style={{ marginTop: "2.8vh" }}>
                <RoomReply
                  replies={roomData.replies}
                  roomId={roomId}
                  reload={reload}
                />
              </Grid>
            </Grid>
          </Grid>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >

            <MenuItem onClick={() => {
              // Todo: 500오류 해결해야함
              dispatch(deleteRoom(roomId)).then((res) => {
                console.log(res);
                navigate("/reserve", { replace: true });
              });
            }}>
              {'방정보 삭제'}
            </MenuItem>
            <MenuItem onClick={() => {
              setModalOpen(true);
            }}>
              {'방정보 수정'}
            </MenuItem>

          </Menu>
          <div id="modal">
            <Modal
              footer={null}
              bodyStyle={{ height: window.innerHeight * 0.8 }}
              open={modalOpen}
              width={window.innerWidth * 0.8}
              onCancel={() => {
                setModalOpen(false);
              }}
            >
              <ReserveForm
                data={roomData.roomInfo}
                roomId={roomId}
                setModalOpen={setModalOpen}
              />
            </Modal></div>
        </Box>


      )}

    </>
  );
};
export default Room;
