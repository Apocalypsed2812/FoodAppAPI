/** 
* @swagger
* components:
*   securitySchemes:
*       bearerAuth:            
*           type: http
*           scheme: bearer
*           bearerFormat: JWT    
*   schemas:
*       userSchema:
*           type: object
*           required: 
*               - username
*               - password
*           properties:
*               username: 
*                   type: String
*                   description: username of account for login
*               pasword: 
*                   type: String
*                   description: password of account for login
*               name: 
*                   type: String
*                   description: name of user
*               email: 
*                   type: String
*                   description: email of user
*               role: 
*                   type: String
*                   description: role of user
*               cart: 
*                   type: array
*                   description: cart of user   
*           example:
*               username: anhtien
*               password: 123456
*               name: Tien
*               email: tien123@gmail.com
*               role: user
*               cart: []
*/

/** 
* @swagger
* components:
*   schemas:
*       productSchema:
*           type: object
*           properties:
*               name: 
*                   type: String
*                   description: name of product
*               sub_title: 
*                   type: String
*                   description: subtitle of product
*               description: 
*                   type: String
*                   description: description of product
*               image_url: 
*                   type: String
*                   description: image url of product
*               category: 
*                   type: String
*                   description: category of product
*               sold: 
*                   type: Number
*                   description: sold of product
*               price: 
*                   type: Number
*                   description: price of product
*               sale: 
*                   type: Number
*                   description: sale of product
*               slug: 
*                   type: String
*                   description: slug of product
*           example:
*               name: camera
*               sub_title: camera new
*               description: camera new 100%
*               image_url: []
*               category: ""
*               sold: 0
*               price: 10000
*               sale: 0
*               slug: camera
*/

/** 
* @swagger
* components:
*   schemas:
*       categorySchema:
*           type: object
*           required: 
*               - name
*           unique:
*               name
*           properties:
*               name: 
*                   type: String
*                   description: category of product 
*           example:
*               name: camera
*/

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: The products managing API
 */

/** 
* @swagger
* /api/product:
*   get:
*       summary: Return the list of product 
*       tags: [Products]
*       responses: 
*           200:
*               description: The list of product
*               content:
*               application/json:
*                   schema:
*                       type: array
*                       items:
*                           $ref: '#/components/schemas/userSchema'
*/

/** 
* @swagger
* /api/product:
*   post:
*       summary: Create a new product
*       tags: [Products]
*       requestBody: 
*           required: true
*           content: 
*               multipart/form-data:
*                   schema:
*                       type: object
*                       properties:
*                           name: 
*                               type: String
*                           sub_title: 
*                               type: String
*                           description: 
*                               type: String
*                           image_url: 
*                               type: file
*                               format: binary
*                           category: 
*                               type: String
*                           price: 
*                               type: Number               
*       responses: 
*           200:
*               description: The product was creata successfully
*               content:
*               application/json:
*                   schema:
*                       items:
*                           $ref: '#/components/schemas/userSchema'
*           500:
*               description: Has occured error
*/

/** 
* @swagger
* /api/product/delete:
*   post:
*       summary: Remove product by id
*       tags: [Products]
*       requestBody: 
*           required: true
*           content:
*                application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       properties:
*                           product_id: 
*                               type: String
*                               description: ID of product
*                       example:
*                           product_id: 6ncb22330340dbnng     
*                application/json:    
*                       schema:
*                           type: object
*                           properties:
*                               product_id: 
*                                   type: String
*                                   description: ID of product
*                       example:
*                           product_id: 6ncb22330340dbnng         
*       responses: 
*           200:
*               description: The book was deleted
*           404:
*               description: The book was not found
*/

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The user managing API
 */

/** 
* @swagger
* /api/get-user:
*   get:
*       security:
*           - bearerAuth: []
*       summary: Return user data
*       tags: [Users]
*       responses: 
*           200:
*               description: The list of user
*               content:
*               application/json:
*                   schema:
*                       type: array
*                       items:
*                           $ref: '#/components/schemas/userSchema'
*/

/** 
* @swagger
* /api/add-to-cart:
*   post:
*       security:
*           - bearerAuth: []
*       summary: Add product to cart
*       tags: [Users]
*       requestBody: 
*           required: true
*           content:
*               application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       properties:
*                           product_id: 
*                               type: String
*                               description: ID of product
*                       example:
*                           product_id: 61d3aa766edc864357146107  
*               application/json:
*                   schema:
*                       type: object
*                       properties:
*                           product_id: 
*                               type: String
*                               description: ID of product
*                       example:
*                           product_id: 61d3aa766edc864357146107 
*                       
*       responses: 
*           200:
*               description: Product added successfully
*           500:
*               description: Has occured error
*/

/** 
* @swagger
* /api/change-quantity:
*   post:
*       security:
*           - bearerAuth: []
*       summary: Change quantity of product
*       tags: [Users]
*       requestBody: 
*           required: true
*           content:
*               application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       properties:
*                           product_id: 
*                               type: String
*                               description: ID of product
*                           handle: 
*                               type: String
*                               description: increase or decreaase quantity of product
*                       example:
*                           product_id: 6ncb22330340dbnng  
*                       
*       responses: 
*           200:
*               description: Change quantity successfully
*           500:
*               description: Change quantity failure
*/

/** 
* @swagger
* /api/delete-product:
*   post:
*       security:
*           - bearerAuth: []
*       summary: Remove product from cart 
*       tags: [Users]
*       requestBody: 
*           required: true
*           content:
*                application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       properties:
*                           product_id: 
*                               type: String
*                               description: ID of product
*                       example:
*                           product_id: 6ncb22330340dbnng             
*       responses: 
*           200:
*               description: Remove product successfully
*           404:
*               description: Remove product failure
*/

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: The authorization managing API
 */

/** 
* @swagger
* /api/register:
*   post:
*       summary: Register an account
*       tags: [Auth]
*       requestBody: 
*           required: true
*           content:
*               application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       properties:
*                           username: 
*                               type: String
*                               description: username of account
*                           password: 
*                               type: String
*                               description: password of account
*                           name: 
*                               type: String
*                               description: name of user
*                           email: 
*                               type: String
*                               description: email of account
*                       example:
*                           username: tien
*                           password: 123456
*                           name: Anh Tien
*                           email: anhtien@gmail.com
*       responses: 
*           200:
*               description: Account saved successfully
*           500:
*               description: Has occured error
*/

/** 
* @swagger
* /api/login:
*   post:
*       summary: Login with account
*       tags: [Auth]
*       requestBody: 
*           required: true
*           content:
*               application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       properties:
*                           username: 
*                               type: String
*                               description: username of account
*                           password: 
*                               type: String
*                               description: password of account
*                       example:
*                           username: tien
*                           password: 123456
*       responses: 
*           200:
*               description: Login successfully
*           500:
*               description: Has occured error
*/
