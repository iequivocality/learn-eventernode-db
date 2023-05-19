<h1>Learn Prisma + Planetscale through Eventernote DB</h1>

<h3>We wil go through learning how to use Prisma to make our schema and deploying our </h3>

**Prerequisites**
- Node 16
- Typescript
- Planetscale account
- Yarn (optional)

**Create a Prisma Project**
<br>
1. Create project directory and navigate to it.
<br>
<code>
mkdir learn-eventernote-db<br>
cd learn-eventernote-db
</code><br>
2. Next, initialize a Typescript Project and add the Prisma CLI as a development dependency
<br>
<code>
npm init -y <br>
npm install prisma typescript ts-node @types/node --save-dev <br>
// OR <br>
yarn init -y <br>
yarn add prisma typescript ts-node @types/node --save-dev
</code> <br><br>
This creates an initial <code>package.json</code> with the necessary packages for Typescript.
3. Initialize Typescript
<br>
<code>npx tsc --init</code>
4. Invoke the Prisma CLI by prefixing it with <code>npx</code>.
<br>
<code>npx prisma</code>
5. Next, set up your Prisma project by creating your Prisma schema file (<code>prisma/schema.prisma</code>) with the following command
<br>
<code>npx prisma init</code>

**Setup your Planetscale database**
1. Create a Planetscale account. You may sign-up using your Github account.
2. Create your organization and go to the PlanetScale dashboard.
3. Create your new database and open Settings > Passwords > New password
4. After creating the password, open Get connection strings and copy the generated database URL, which usually looks like this:
<br>
<code>
DATABASE_URL='mysql://<username\>:<password\>@aws.connect.psdb.cloud/<database name/>?ssl={"rejectUnauthorized":true}'
</code>
<br>
5. For MAC OS X, add the following string if you set SSL to your PlanetScale DB:
<br>
<code>
&sslcert=/etc/ssl/cert.pem
</code>
<br>

**Deployment of Schema to PlanetScale**
1. To access the PlanetScale DB, modify the datasource by changing the <code>provider</code> to <code>mysql</code> and add <code>relationMode="prisma"</code>. The datasource model should look like this:
<br>
<code>
datasource db {
  provider     = "mysql"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
}
</code>
<br>
2. Next, we add the models, we can use the sample on prisma/schema.prisma.
3. After adding the models, push the DB changes to PlanetScale
<br>
<code>
npx prisma db push
</code>

**Adding scripts to do CRUD on created database**
1. Run <code>npx prisma generate</code>
2. Create TS files.
3. You can start doing CRUD on the database.
<br>
<code>
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const main = async () => {
  // add client code here
};
main()
</code>

   