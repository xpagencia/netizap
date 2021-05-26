// endpoints de operações 
import { Router } from 'express';
import { message_send_response } from '@models/services/message_send'

const router = Router();

router.get('/services/message_send', (req, res) => {
    let message_send_response: message_send_response = {
        result: 'ok'
    };
    res.status(200).send(message_send_response);
});

module.exports = router;
export default router;
