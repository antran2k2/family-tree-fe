import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useTheme} from '../../Hooks';
import Header from '../../Components/Header';
import Container from '../../Components/Container';
import Card from '../../Components/Card';

interface Event {
  date: string;
  event: string;
  alive: boolean;
}
const CalendarContainer = () => {
  const {MetricsSizes, Fonts, Images, Colors} = useTheme();

  const [selected, setSelected] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);

  const data: Event[] = [
    {
      event: 'Sinh nhật Nguyễn Văn A',
      date: '2003-07-09',
      alive: true,
    },
    {
      event: 'Sinh nhật Nguyễn Văn B',
      date: '2020-07-04',
      alive: true,
    },
    {
      event: 'Ngày giỗ Nguyễn Văn C',
      date: '2000-07-01',
      alive: false,
    },
    {
      event: 'Sinh nhật Per1',
      date: '2000-07-02',
      alive: true,
    },
    {
      event: 'Ngày giỗ Nguyễn Văn D',
      date: '2010-07-04',
      alive: true,
    },
    {
      event: 'Sinh nhật MOM',
      date: '2006-05-08',
      alive: true,
    },
    {
      event: 'Sinh nhật Nhu',
      date: '2003-10-12',
      alive: true,
    },
  ];

  // Process the data and create the 'marked' object
  const marked: {[date: string]: {marked: boolean; dots: any[]}} = {};
  data.forEach(item => {
    const eventDate = new Date(item.date);
    const currentYear = new Date().getFullYear();

    for (let i = -1; i < 2; i++) {
      const year = currentYear + i;
      const month = (eventDate.getMonth() + 1).toString().padStart(2, '0');
      const day = eventDate.getDate().toString().padStart(2, '0');
      const dateString = `${year}-${month}-${day}`;
      const dotColor = item.alive ? 'green' : 'gray';

      // Check if the date already exists in the marked object
      if (marked[dateString]) {
        // If the date already has one or more dots, add a new dot to the existing array
        marked[dateString].dots.push({color: dotColor});
      } else {
        // If the date does not exist in the marked object, create a new array with the dot
        marked[dateString] = {
          marked: true,
          dots: [{color: dotColor}],
        };
      }
    }
  });

  const handleDayPress = (day: any) => {
    setSelected(day.dateString);

    // Filter the events for the selected date and store them in 'selectedEvents'
    setSelectedEvents(
      data.filter(item => {
        const eventMonth = (new Date(item.date).getMonth() + 1)
          .toString()
          .padStart(2, '0');
        const eventDay = new Date(item.date)
          .getDate()
          .toString()
          .padStart(2, '0');
        return `${eventMonth}-${eventDay}` === day.dateString.substring(5);
      }),
    );
  };
  return (
    <>
      <Header title={'Lịch'} />
      <View>
        <Calendar
          markingType={'multi-dot'}
          onDayPress={handleDayPress}
          markedDates={{
            ...marked,
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
            },
          }}
          monthFormat={'MM-yyyy'}
        />
        <Container pt={40}>
          <Container jc="center" pb={5} flexDr="row">
            <Text style={Fonts.textSmallBold}>
              Các sự kiện trong ngày {selected}:
            </Text>
          </Container>
        </Container>
        {selectedEvents.length > 0 ? (
          <View>
            {selectedEvents.map((event, index) => (
              <Container
                key={index}
                jc="flex-start"
                pt={35}
                pl={50}
                flexDr="row">
                <Text key={index} style={styles.eventListItem}>
                  + {event.event}
                </Text>
              </Container>
            ))}
          </View>
        ) : (
          <Container jc="center" pt={35} flexDr="row">
            <Text style={Fonts.textSmall}>--Không có--</Text>
          </Container>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  eventListContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginTop: 10,
  },
  eventListItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  eventListHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});
export default CalendarContainer;
