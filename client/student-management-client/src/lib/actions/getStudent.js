import { prisma } from '@/lib/utils';

const getStudents = async (search) => {
    const searchingFilter = search ? {
        OR: [
            { name: search },
            { roll: search },
            { department: search },
        ],
    } : {};


    // return { filterStudents };
    const data = await prisma.user.findMany({
        where: { AND: [{ approved: true }, searchingFilter] }
    });
    return data;
};

export default getStudents;
