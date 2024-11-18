import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// for typechecking
interface updateParam {
    firstName: string;
    lastName: string;
}

// first argument is a string and second one is a ttypechecked object

async function UpdateUser(username: string, {
    firstName,
    lastName} : updateParam )   {
        const res = await prisma.user.update({
            where: {email: username},
            data:{
                firstName,
                lastName
            }
        })
        console.log(res);
    }

    UpdateUser("Deepanshu@gmail.com" , {
        firstName: "Deep" , lastName: "Sirohi"
    })