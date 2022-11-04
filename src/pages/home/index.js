import React, { useState } from 'react';
import {
  Header,
  HeaderTitle,
  Tab,
  Schedule,
  HomeContainer,
  SessionContainer,
  SessionActions,
  Main,
  SessionHeader,
  Actions,
  ActionsContainer,
  Required,
} from './style.js';
import Button from '../../components/atoms/button';
import { sessionData } from '../../constant/index.js';
import {
  Eye,
  Menu,
  Edit,
  Plus,
  Video,
  Marker,
  Ellipsis,
  Time,
  Download,
} from '../../assets';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

function handleOrder(array, startIdx, endIdx) {
  const temp = [...array];
  const [removed] = temp.splice(startIdx, 1);
  temp.splice(endIdx, 0, removed);
  return temp;
}

export default function Home() {
  const [data, setData] = useState(sessionData);

  function handleToggleEdit(idx) {
    const tempData = [...data];
    tempData[idx].isEditing = !tempData[idx].isEditing;
    setData(tempData);
  }

  function handleOnChangeSession(idx, e) {
    const tempData = [...data];
    tempData[idx].title = e.target.value;
    setData(tempData);
  }

  function handleCloseEdit(idx) {
    const tempData = [...data];
    tempData[idx].isEditing = false;
    setData(tempData);
  }

  function handleAddSession() {
    setData([
      ...data,
      {
        id: data.length + 1,
        title: `Session ${data.length + 1}`,
        isEditing: false,
        lesson: [],
      },
    ]);
  }

  function onDragEnd(result) {
    const ordered = handleOrder(
      data,
      result.source.index,
      result.destination.index
    );
    setData(ordered);
  }

  function onDragMaterial(result) {
    const lessonItems = data.reduce((acc, item, idx) => {
      acc[idx] = item.lesson;
      return acc;
    }, {});

    const sourceIndex = result.source.index;
    const sourceLesson = lessonItems[sourceIndex];

    const tempData = [...data];
    const ordered = handleOrder(
      sourceLesson,
      result.source.index,
      result.destination.index
    );
    tempData.map((session) => (session.lesson = ordered));
    setData(tempData);
  }

  function handleDeleteSession(idx) {
    const tempData = [...data];
    tempData.splice(idx, 1);
    setData(tempData);
  }

  function handleAddSession(idx) {
    const tempData = [...data];
    tempData[idx].lesson.push({
      id: tempData[idx].lesson.length + 1,
      type: 'online',
      title: 'Judul Video',
      isRequired: true,
      isPreviewAble: false,
      date: '25 Oktober 2021',
      duration: '06:30',
    });
    setData(tempData);
  }

  const renderHeader = () => (
    <Header>
      <div>
        <HeaderTitle>
          <h2>Belajar dan praktek cinematic videography</h2>
          <span>Last edited 18 October 2021 | 13:23</span>
        </HeaderTitle>
        <Button type="outlined">
          <img src={Eye} alt="eye" />
          Preview
        </Button>
      </div>
      <Tab>
        <p>Curricullum</p>
      </Tab>
    </Header>
  );

  const renderSchedule = () => (
    <Schedule>Event Schedule: 24 Oktober 2021, 16:30</Schedule>
  );

  const renderSession = ({ id, isEditing, title, lesson }, i) => {
    return (
      <Draggable draggableId={id.toString()} index={i} key={id}>
        {(provided) => (
          <SessionContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <SessionHeader>
              <SessionActions isEditing={isEditing}>
                <img src={Menu} alt="menu" />
                <input
                  value={title}
                  onChange={(e) => handleOnChangeSession(i, e)}
                  onBlur={(e) => handleCloseEdit(i, e)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCloseEdit(i);
                    }
                  }}
                />
                <p>{title}</p>
                <img
                  src={Edit}
                  alt="edit"
                  onClick={() => handleToggleEdit(i)}
                />
              </SessionActions>
              <p onClick={() => handleDeleteSession(i)}>X</p>
            </SessionHeader>
            <DragDropContext onDragEnd={onDragMaterial}>
              <Droppable droppableId="session-material">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {lesson.map((val, i) => renderSessionMaterial(val, i))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <div
              style={{
                marginLeft: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
              <Button type="contained" onClick={() => handleAddSession(i)}>
                <img src={Plus} alt="plus" />
              </Button>
              <p style={{ fontSize: 20 }}>Add Lesson Material</p>
            </div>
          </SessionContainer>
        )}
      </Draggable>
    );
  };

  const renderSessionMaterial = (
    { id, type, title, isRequired, isPreviewAble, date, duration },
    i
  ) => (
    <Draggable draggableId={id.toString()} index={i} key={id}>
      {(provided) => (
        <ActionsContainer
          isActive={isPreviewAble}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Actions>
            <img src={Menu} alt="menu" />
            <img src={type === 'online' ? Video : Marker} alt="icon" />
            <p>{title}</p>
            {isRequired && <Required>Required</Required>}
            {isPreviewAble && (
              <>
                <img src={Ellipsis} alt="ellipsis" />
                <p>Previewable</p>
              </>
            )}
          </Actions>
          <Actions>
            <Actions>
              <img src={Time} alt="clock" />
              <p>{date}</p>
            </Actions>
            <Actions>
              <img src={Time} alt="clock" />
              <p>{duration} Min</p>
            </Actions>
            <Actions>
              <img src={Download} alt="download" />
              <p>Downloadable</p>
            </Actions>
          </Actions>
        </ActionsContainer>
      )}
    </Draggable>
  );

  const renderMainContent = () => (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="session">
          {(provided) => (
            <Main ref={provided.innerRef} {...provided.droppableProps}>
              {data.map((session, i) => {
                return (
                  <div key={session.id}>
                    {renderSession(session, i)}
                    {provided.placeholder}
                  </div>
                );
              })}
            </Main>
          )}
        </Droppable>
      </DragDropContext>
      <div style={{ marginBottom: '1rem' }}>
        <Button type="contained" onClick={handleAddSession}>
          <img src={Plus} alt="plus" />
          Add Session
        </Button>
      </div>
    </>
  );

  return (
    <HomeContainer>
      {renderHeader()}
      {renderSchedule()}
      {renderMainContent()}
    </HomeContainer>
  );
}
