/*
    Write an algorithm that takes two people's calendar and returns free slots of time during which these two people can have a meeting.
    Calendar is a list of tuples

    Unavailable slots for Person A = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
    Daily bound/Work timings = ['9:00',  '20:00']

    Unavailable slots Person B = [['10:00', '11.30'], ['12:30', '14:30'],['14:30', '15:00'], ['16:00', '17:00']]
    Daily bound/Work timings = ['10:00', '18:30']

    Duration of Meeting : 30
    Sample Output: [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]

    Additional Information:
    The list of time is always sorted.
    The returned free time slots are always between the daily bounds.
*/

const findCalendarSlots = require("./calendar");

test("returns the free slots for meeting", () => {
  expect(findCalendarSlots()).toEqual([
    ["11:30", "12:00"],
    ["15:00", "16:00"],
    ["18:00", "18:30"],
  ]);
});
