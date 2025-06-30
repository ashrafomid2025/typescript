// enum and tuple
// default argument, rested parameter
// enum Grade {
//   fail = "fail",
//   pass = "pass",
// }
// enum condition {
//   loggedIn = "Log in",
//   loggedOut = "log out",
//   Active = "online",
// }
// // group , constant
// // array ,
// let listOfStudent: number[] = [1, 2, 3, 6];
// let list: [number, string, number, boolean] = [1, "Ali", 23, true];
// let Sinf: [number, string, number, number, string, number] = [
//   1,
//   "Ali",
//   45,
//   3,
//   "",
//   34,
// ];

// console.log(Sinf[4]);

// data type enum, tuple
enum Colors {
  Red,
  Green,
  Purple,
  Black,
}
let listOfStudents: string[] = ["Ali", "Ahamd", "Taqi"];
// size 3, element: data type
let listOFSt: [number, string, boolean, number, string, boolean] = [
  1,
  "Ali",
  true,
  2,
  "Taqi",
  false,
];
enum Color {
  red,
  purple,
  green,
}
console.log(listOFSt[4]);
// tuples are array like structured but there is something different fixed sized, data type for each element
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Invalid argument");
}
function add(a: number, b: number): string;
function add(a: string, b: string): string;
function add(a: string | number, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Invalid argument");
}














Private Sub CommandButton1_Click()
    Dim ws As Worksheet
    Dim akharinrow As Long, i As Long
    Dim topPos As Long
    Dim txtBox As MSForms.TextBox
    Dim col As Integer

    Set ws = Worksheets("student")
    akharinrow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    topPos = 10  ' initial vertical position

    ' First, clear old textboxes if any
    For Each ctrl In Me.Controls
        If TypeName(ctrl) = "TextBox" And ctrl.Name Like "Dynamic*" Then
            Me.Controls.Remove ctrl.Name
        End If
    Next ctrl

    ' Add column headers
    Me.Controls.Add("Forms.Label.1", "lblHeader1", True).Caption = "Name"
    Me.Controls("lblHeader1").Left = 10
    Me.Controls("lblHeader1").Top = topPos

    Me.Controls.Add("Forms.Label.1", "lblHeader2", True).Caption = "Father's Name"
    Me.Controls("lblHeader2").Left = 120
    Me.Controls("lblHeader2").Top = topPos

    Me.Controls.Add("Forms.Label.1", "lblHeader3", True).Caption = "Class"
    Me.Controls("lblHeader3").Left = 230
    Me.Controls("lblHeader3").Top = topPos

    topPos = topPos + 20

    ' Create textboxes for each row of data
    For i = 2 To akharinrow
        ' Column 2 (Name)
        Set txtBox = Me.Controls.Add("Forms.TextBox.1", "Dynamic_Name_" & i, True)
        txtBox.Left = 10
        txtBox.Top = topPos
        txtBox.Width = 100
        txtBox.Text = ws.Cells(i, 2).Value

        ' Column 3 (Father's Name)
        Set txtBox = Me.Controls.Add("Forms.TextBox.1", "Dynamic_Father_" & i, True)
        txtBox.Left = 120
        txtBox.Top = topPos
        txtBox.Width = 100
        txtBox.Text = ws.Cells(i, 3).Value

        ' Column 4 (Class)
        Set txtBox = Me.Controls.Add("Forms.TextBox.1", "Dynamic_Class_" & i, True)
        txtBox.Left = 230
        txtBox.Top = topPos
        txtBox.Width = 100
        txtBox.Text = ws.Cells(i, 4).Value

        topPos = topPos + 25
    Next i
End Sub

