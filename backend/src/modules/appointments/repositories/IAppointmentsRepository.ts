import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IfindByMonthFromProviderDTO from '../dtos/IfindByMonthFromProviderDTO';
import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(data: Date): Promise<Appointment | undefined>;
  findByMonthFromProvider(
    data: IfindByMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
