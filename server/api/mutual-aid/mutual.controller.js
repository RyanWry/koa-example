/**
 * Created by ruiyuan on 16-2-18.
 */

exports.getMutualAidList = function *() {
    try {

        this.status = 200;
        this.body = 'ok';
        log.trace({req: this.req, res: this.res}, 'abc');
    } catch (err) {
        this.throw(err);
    }
};