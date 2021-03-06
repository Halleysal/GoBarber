import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindByDayFromProviderDTO from '../dtos/IfindByDayFromProviderDTO';
import IfindByMonthFromProviderDTO from '../dtos/IfindByMonthFromProviderDTO';
import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(data: Date, provider_id: string): Promise<Appointment | undefined>;
  findByMonthFromProvider(
    data: IfindByMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findByDayFromProvider(
    data: IFindByDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
