export default function handler(req, res) {
    if (req.method === 'POST') {
        const citizen_id = req.body.citizen_id.toString().trim()


        if ((citizen_id.length !== 13) || !citizen_id) {
            res.status(400).json({ success: false, error_code: "001", error_msg: "citizen_id require" })
        }

        let cal = 0;

        for (let index = 0; index < citizen_id.length; index++) {
            if (index === 0) {

                cal += citizen_id[index] * 13
            }
            if (index === 1) {

                cal += citizen_id[index] * 12
            }
            if (index === 2) {

                cal += citizen_id[index] * 11
            }
            if (index === 3) {

                cal += citizen_id[index] * 10
            }
            if (index === 4) {

                cal += citizen_id[index] * 9
            }
            if (index === 5) {

                cal += citizen_id[index] * 8
            }
            if (index === 6) {

                cal += citizen_id[index] * 7
            }
            if (index === 7) {

                cal += citizen_id[index] * 6
            }
            if (index === 8) {

                cal += citizen_id[index] * 5
            }
            if (index === 9) {

                cal += citizen_id[index] * 4
            }
            if (index === 10) {

                cal += citizen_id[index] * 3
            }
            if (index === 11) {

                cal += citizen_id[index] * 2
            }

        }

        const calMod = (cal % 11)

        const sol5 = 11 - calMod


        if (sol5.toString().length >= 2) {
            if (parseInt(sol5.toString()[1]) === parseInt(citizen_id[12])) {
                res.status(200).json({ success: true, error_code: 200, error_msg: "" })
            } else {
                res.status(200).json({ success: false, error_code: "001", error_msg: "citizen_id invalid" })
            }
        } else {
            if (parseInt(sol5) === parseInt(citizen_id[12])) {
                res.status(200).json({ success: true, error_code: 200, error_msg: "" })
            } else {
                res.status(200).json({ success: false, error_code: "001", error_msg: "citizen_id invalid" })
            }
        }
    }
}
