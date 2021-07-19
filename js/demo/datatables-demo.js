/* Formatting function for row details */
function format(d) {
  // `d` is the original data object for the row
  return (
    '<h6 class="m-0 font-weight-bold text-primary">Availablility</h6>' +
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    '<thead>' +
    '<tr>' +
    '<th>Mon</th>' +
    '<th>Tue</th>' +
    '<th>Wed</th>' +
    '<th>Thu</th>' +
    '<th>Fri</th>' +
    '<th>Sat</th>' +
    '<th>Sun</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' +
    '<td>' +
    d.availability.M +
    '</td>' +
    '<td>' +
    d.availability.T +
    '</td>' +
    '<td>' +
    d.availability.W +
    '</td>' +
    '<td>' +
    d.availability.Th +
    '</td>' +
    '<td>' +
    d.availability.F +
    '</td>' +
    '<td>' +
    d.availability.S +
    '</td>' +
    '<td>' +
    d.availability.Su +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '<h6 class="m-0 font-weight-bold text-primary">Questions</h6>' +
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    '<thead>' +
    '<tr>' +
    '<th>Question</th>' +
    '<th>Answer</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' +
    '<td>' +
    d.questions[0].text +
    '</td>' +
    '<td>' +
    d.questions[0].answer +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>'
  )
}

// Call the dataTables jQuery plugin
$(document).ready(function () {
  var data = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Server',
      applied: '03/15/16',
      experience: 2,
      availability: {
        M: 2,
        T: 2,
        W: 1,
        Th: 2,
        F: 1,
        S: 0,
        Su: 0,
      },
      questions: [
        {
          text: 'Have you ever been convicted of a felony?',
          answer: 'No',
        },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Cook',
      applied: '02/08/16',
      experience: 4,
      availability: {
        M: 1,
        T: 1,
        W: 1,
        Th: 1,
        F: 0,
        S: 0,
        Su: 0,
      },
      questions: [
        {
          text: 'Have you ever been convicted of a felony?',
          answer: 'Yes',
        },
      ],
    },
    {
      M: 2,
      T: 2,
      W: 2,
      Th: 2,
      F: 2,
      id: 3,
      name: 'David Jessup',
      position: 'Chef',
      applied: '03/08/16',
      experience: 2,
      availability: {
        S: 0,
        Su: 0,
      },
      questions: [
        {
          text: 'Are you authorized to work in the United States?',
          answer: 'Yes',
        },
      ],
    },
    {
      id: 4,
      name: 'Clay vanSchalkwijk',
      position: 'Cook',
      applied: '03/08/16',
      experience: 1,
      availability: {
        M: 1,
        T: 0,
        W: 1,
        Th: 0,
        F: 1,
        S: 0,
        Su: 0,
      },
      questions: [
        {
          text: 'Are you authorized to work in the United States?',
          answer: 'Yes',
        },
      ],
    },
  ]

  var table = $('#dataTable').DataTable({
    data: data,
    columns: [
      {
        class: 'details-control',
        orderable: false,
        data: null,
        defaultContent: '',
      },
      { data: 'name' },
      { data: 'position' },
      { data: 'applied' },
      { data: 'experience' },
    ],
    order: [[1, 'asc']],
  })

  // Add event listener for opening and closing details
  $('#dataTable tbody').on('click', 'tr td:first-child', function () {
    var tr = $(this).parents('tr')
    var row = table.row(tr)

    if (row.child.isShown()) {
      // This row is already open - close it
      tr.removeClass('details')
      row.child.hide()
    } else {
      // Open this row
      tr.addClass('details')
      row.child(format(row.data())).show()
    }
  })
})
