/* 
    admin 控制台
*/

class admin {
    /* 添加产品 */
    async createProduct(ctx, next) {


    }
   

    /* 添加删除 */
    async deleteProduct(ctx, next) {}

    /* 添加优惠券 */
    async addCoupon(ctx, next) {}

    /* 删除优惠券 */
    async deleteCoupon(ctx, next) {}

    /* 发放优惠券 */
    async distributeCoupon(ctx, next) {}

    /* 发送通知 */
    async sendNotice(ctx, next) {}

    /* 发优惠活动 */
    async sendPromotion(ctx, next) {}

    /* 检查权限 */
    async checkAuth(ctx, next) {}
}

module.exports = new admin();
